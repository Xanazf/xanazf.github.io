/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, RouteSectionProps } from '@solidjs/router';
import './index.css';
import { createReaction, createSignal, lazy, onMount } from 'solid-js';
import Nav from './assets/components/Nav';
import Footer from './pages/footer';
import { ThemeProvider } from './context/ThemeContext';
import Cookies from 'js-cookie';
import {
  generateHexagonIslands,
  renderHexagonIslands,
} from './assets/svg/Hexagons';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const WikiHome = lazy(() => import('./pages/WikiHome'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Showcase = lazy(() => import('./pages/Showcase'));
const Games = lazy(() => import('./pages/Games'));

const root = document.getElementById('root');

const App = (props: RouteSectionProps) => {
  const [bodyHeight, setBodyHeight] = createSignal<number | null>(null);

  const renderHexagons = createReaction(() => {
    const svgElement = document.getElementById('svg_bg');
    const islands = generateHexagonIslands(
      svgElement!.clientWidth,
      svgElement!.clientHeight,
      24,
      0.3
    );
    renderHexagonIslands(islands, svgElement!);
  });

  onMount(() => {
    setTimeout(() => setBodyHeight(document.body.clientHeight), 100);
  });

  renderHexagons(() => bodyHeight());

  return (
    <>
      <ThemeProvider theme={Cookies.get('theme') || 'dark'}>
        <div id="svg_bg"></div>
        <header>
          <Nav />
        </header>
        <div class="AppInner">{props.children}</div>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
};
render(
  () => (
    <Router root={App}>
      <Route
        path="/"
        component={Home}
      />
      <Route
        path="/projects"
        component={Projects}
      />
      <Route
        path="/wiki"
        component={WikiHome}
      />
      <Route
        path="/showcase"
        component={Showcase}
      />
      <Route
        path="/games"
        component={Games}
      />
      <Route
        path="*404"
        component={NotFound}
      />
    </Router>
  ),
  root!
);

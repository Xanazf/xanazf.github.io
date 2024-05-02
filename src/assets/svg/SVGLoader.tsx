import {createSignal, Show, lazy, Component, JSX, For} from 'solid-js';

type IconModule = {default: Component<JSX.SvgSVGAttributes<SVGSVGElement>>};

interface DynamicSVGProps {
  iconName: string;
  brand?: boolean;
}
export function useSVG(props: DynamicSVGProps) {
  const iconName = props.iconName;
  const brand = props.brand ? true : false;

  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<unknown>();
  const [genIcons, setGenIcons] = createSignal<any[]>([]);
  const [brandIcons, setBrandIcons] = createSignal<any[]>([]);

  try {
    setLoading(true);
    const gen_modules = import.meta.glob<IconModule>('./icons/*.svg', {
      query: '?component-solid',
    });
    const brand_modules = import.meta.glob<IconModule>('./icons/brands/*.svg', {
      query: '?component-solid',
    });

    setGenIcons(
      Object.entries(gen_modules).map(([key, value]) => {
        return {name: key.slice(8, -4), SvgComponent: lazy(value)};
      })
    );
    setBrandIcons(
      Object.entries(brand_modules).map(([key, value]) => {
        return {name: key.slice(15, -4), SvgComponent: lazy(value)};
      })
    );
  } catch (err) {
    setError(err);
    console.error(err);
  } finally {
    setLoading(false);
  }

  return (
    <>
      <Show when={!loading() && !error()}>
        {brand ? (
          <For each={brandIcons()}>
            {({name, SvgComponent}) => {
              return name === iconName ? <SvgComponent /> : <></>;
            }}
          </For>
        ) : (
          <For each={genIcons()}>
            {({name, SvgComponent}) => {
              return name === iconName ? <SvgComponent /> : <></>;
            }}
          </For>
        )}
      </Show>
    </>
  );
}

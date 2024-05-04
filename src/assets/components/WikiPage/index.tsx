interface WikiPageProps {
  children: any;
}

function WikiPage(props: WikiPageProps) {
  return (
    <>
      <nav>tree</nav>
      <div>{props.children}</div>
      <section>summary</section>
    </>
  );
}
export default WikiPage;

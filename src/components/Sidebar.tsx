import { Show } from "solid-js";

import "../scss/Sidebar.scss";

type TSidebarProps = {
  isVisible: boolean;
};

export default function Sidebar(props: TSidebarProps) {
  return (
    <Show when={props.isVisible}>
      <section class="sidebar">
        <a href="#">Notes</a>
      </section>
    </Show>
  );
}

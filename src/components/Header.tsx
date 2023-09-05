import { createSignal } from "solid-js";

import "../scss/Header.scss";

// local components:
import Sidebar from "./Sidebar";

// icons:
import Menu from "../assets/icons/Menu";

export default function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = createSignal(false);

  return (
    <header class="header-section">
      <div class="sidebar-container">
        <button
          class="icon"
          onclick={() => setIsSidebarVisible((prev) => !prev)}
        >
          <Menu />
        </button>
        <Sidebar isVisible={isSidebarVisible()} />
      </div>

      <div class="logo-container">
        <img src="" alt="" />
        NoteSTree
      </div>

      <nav class="menus-container">
        <button>
          <img src="" alt="profile" />
        </button>
      </nav>
    </header>
  );
}

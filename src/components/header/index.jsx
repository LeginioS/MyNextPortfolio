"use client";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";
import "./styles.css";
import Link from "next/link";
export function Header() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <header>
      <a href="#" className={"logo"}>
        {" "}
        Legínio.{" "}
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav>
        <Link
          href={"/"}
          className={`
            ${activeTab === "home" ? "active" : ""}
              
            `}
          onClick={() => setActiveTab("home")}
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className={`
                ${activeTab === "services" ? "active" : ""}
                `}
          onClick={() => setActiveTab("services")}
        >
          Servicos
        </Link>
        <Link
          href="/resumo"
          className={`
                ${activeTab === "resumo" ? "active" : ""}
                `}
          onClick={() => setActiveTab("resumo")}
        >
          Resumo
        </Link>
        <Link
          href={"/portifolio"}
          className={`
                ${activeTab === "portfolio" ? "active" : ""}
                `}
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio
        </Link>
        <Link
          href={"/contact"}
          className={`
                ${activeTab === "contato" ? "active" : ""}
                `}
          onClick={() => setActiveTab("contato")}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}

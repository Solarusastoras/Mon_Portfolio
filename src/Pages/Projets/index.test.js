import "whatwg-fetch";
import React from "react";
import { render, screen, act } from "@testing-library/react";
import {
  beforeAll,
  beforeEach,
  describe,
  it,
  jest,
  expect,
} from "@jest/globals";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Projets from "./index";

// Mock localStorage
beforeAll(() => {
  const localStorageMock = (function () {
    let store = {};
    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
      removeItem(key) {
        delete store[key];
      },
    };
  })();
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
});

// Mock data
const mockProjet = {
  id: "2",
  title: "Riding Cities",
  cover: "https://i.ibb.co/f2FNk0v/riding-cities.webp",
  pictures: "https://i.ibb.co/f2FNk0v/riding-cities.webp",
  description:
    "Site web d'une association de Rider. Ce projet est une introduction aux fondamentaux du langage HTML et CSS. Ma tâche principale était de créer une nouvelle section sur la page web de l'association.",
  alt: "Riding Cities",
  type: "Site statique",
  tags: [
    {
      name: "HTML",
      logo: "https://i.ibb.co/rfLQKqD/html-5-2-2.webp",
      alt: "Logo HTML",
      definition:
        "HTML (HyperText Markup Language) est le langage de balisage standard utilisé pour créer des pages web.",
    },
    {
      name: "CSS",
      logo: "https://i.ibb.co/n6KYNK2/css-3.webp",
      alt: "Logo CSS",
      definition:
        "CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour décrire la présentation d'un document écrit en HTML ou XML.",
    },
  ],
  github: "https://github.com/Solarusastoras/Projet-2.git",
  gitpage: "https://solarusastoras.github.io/Projet-2/",
};

beforeEach(async () => {
  localStorage.setItem("clickedId", "2");
  jest.spyOn(window, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProjet),
    })
  );
  await act(async () => {
    render(
      <MemoryRouter>
        <Projets />
      </MemoryRouter>
    );
  });
});

// Test d'intégration
describe("When a page is created", () => {
  // Test pour vérifier que le bon titre est affiché
  it("a title of site is displayed", async () => {
    const title = await screen.findByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Riding Cities");
  });

  // Test pour vérifier que la description du site est affichée
  it("a description is displayed", async () => {
    const description = await screen.findByText((content) => {
      return content.includes(
        "Site web d une association de Rider. Ce projet est une introduction aux fondamentaux du langage HTML et CSS. Ma tâche principale était de créer une nouvelle section sur la page web de l'association."
      );
    });
    expect(description).toBeInTheDocument();
  });

  // Test pour vérifier que les langages utilisés sont affichés
  it("languages used are displayed", async () => {
    const languages = await screen.findByText("Langages utilisés");
    expect(languages).toBeInTheDocument();
  });

  // Test pour vérifier que le bouton GitHub est affiché
  it("a GitHub button is displayed", async () => {
    const githubButton = await screen.findByText("GitHub");
    expect(githubButton).toBeInTheDocument();
  });

  // Test pour vérifier que le bouton GitPage est affiché (si présent)
  it("a GitPage button is displayed if present", async () => {
    const gitpageButton = await screen.queryByText("GitPage");
    if (gitpageButton) {
      expect(gitpageButton).toBeInTheDocument();
    }
  });
});

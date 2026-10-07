# pw-framework

Framework E2E profesional con Playwright, Allure Report, GitHub Actions y soporte para AI Agents.

[![CI](https://github.com/andresiglesias1996/pw-framework/actions/workflows/ci.yml/badge.svg)](https://github.com/andresiglesias1996/pw-framework/actions/workflows/ci.yml)
[![Allure Report](https://img.shields.io/badge/Allure-Report-orange)](https://andresiglesias1996.github.io/pw-framework)

## Stack

- **Playwright** 1.60 — testing E2E multi-browser
- **TypeScript** — tipado estricto
- **Allure** 3.x — reportes interactivos desplegados en GitHub Pages
- **GitHub Actions** — CI/CD automatizado

## Estructura

```
pw-framework/
├── src/
│   ├── pages/          # Page Object Model
│   ├── fixtures/       # Custom fixtures
│   └── helpers/        # Utilidades de testing
├── tests/
│   ├── smoke/          # Tests críticos
│   ├── regression/     # Suite de regresión
│   └── accessibility/  # Tests de accesibilidad
├── .github/workflows/  # CI/CD
├── playwright.config.ts
└── AGENTS.md           # Guía de AI Agents
```

## Instalación

```bash
npm install
npx playwright install
```

## Ejecución

```bash
# Todos los tests
npm test

# Por tipo
npm run test:smoke
npm run test:regression
npm run test:accessibility

# Con reporte Allure
npm test && npm run allure:serve
```

## Reporte Allure

Los reportes se generan automáticamente en cada CI run y se publican en GitHub Pages.

Ver reporte: `https://andresiglesias1996.github.io/pw-framework`

## AI Agents

Ver [AGENTS.md](./AGENTS.md) para la guía de uso de agentes de IA con este framework.

## Branches

| Branch | Propósito |
|--------|-----------|
| `main` | Producción, protegido |
| `develop` | Base de desarrollo |
| `feat/*` | Nuevas funcionalidades |
| `fix/*` | Correcciones |

## Conventional Commits

```
feat: nueva funcionalidad
fix: corrección de bug
test: añadir o modificar tests
ci: cambios en pipeline
docs: documentación
chore: mantenimiento
```

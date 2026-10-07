# AI Agents — pw-framework

Guía de uso de agentes de IA con Playwright 1.60+.

## Playwright AI Agents

Playwright 1.60 introduce agentes de testing nativos con un flujo planner → generator → healer.

### Arquitectura agéntica

```
┌─────────────┐    ┌───────────────┐    ┌─────────────┐
│   Planner   │───▶│   Generator   │───▶│   Healer    │
│             │    │               │    │             │
│ Explora app │    │ Genera specs  │    │ Repara tests│
│ y diseña    │    │ TypeScript    │    │ con traces  │
│ el plan     │    │ ejecutables   │    │             │
└─────────────┘    └───────────────┘    └─────────────┘
```

### MCP Server (Model Context Protocol)

Playwright incluye un MCP server oficial que permite a agentes de IA controlar un browser real:

```bash
# Instalar el MCP server de Playwright
npx @playwright/mcp@latest

# Configurar en tu AI coding agent (cursor, claude-code, etc.)
# En .claude/mcp.json o settings del agente:
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### Test Agents — Planner

El planner explora tu app y genera un plan de tests:

```bash
# Ejecutar el planner sobre una URL
npx playwright agent plan --url https://tu-app.com --output tests/plan.md
```

### Test Agents — Generator

Convierte el plan en specs ejecutables:

```bash
# Generar specs desde el plan
npx playwright agent generate --plan tests/plan.md --output tests/generated/
```

### Test Agents — Healer

Repara tests rotos analizando las trazas:

```bash
# Reparar tests fallidos
npx playwright agent heal --trace test-results/trace.zip --spec tests/mi-test.spec.ts
```

### ARIA Snapshots

En lugar de selectores CSS frágiles, usá ARIA snapshots para assertions accesibles y estables:

```typescript
test('aria snapshot del header', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('header')).toMatchAriaSnapshot(`
    - navigation:
      - link "Home"
      - link "Docs"
      - link "API"
  `);
});
```

### Self-healing selectors

Los agentes leen las trazas de Playwright para reparar selectores automáticamente cuando la UI cambia.

```bash
# Activar modo trace completo para que el healer tenga más contexto
BASE_URL=https://tu-app.com npx playwright test --trace on
```

### Debugging con IA desde terminal

```bash
# Correr tests en modo debug con step-through
npx playwright test --debug

# El agente puede leer el output y sugerir fixes
npx playwright test --reporter=json | tu-agente-ia analizar
```

## Flujo recomendado con AI agents

1. **Nuevo feature**: correr el Planner sobre la nueva pantalla
2. **Review del plan**: revisar y ajustar el plan generado
3. **Generar specs**: correr el Generator
4. **CI falla**: correr el Healer con la traza del fallo
5. **Nuevos selectores**: usar ARIA snapshots en lugar de CSS

## Recursos

- [Playwright Test Agents docs](https://playwright.dev/docs/test-agents)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [ARIA Snapshots](https://playwright.dev/docs/aria-snapshots)

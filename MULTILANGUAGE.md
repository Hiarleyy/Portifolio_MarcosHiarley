# 🌍 Sistema de Mudança de Idioma

## Como Funciona

O sistema de internacionalização (i18n) foi implementado usando **React Context API** e permite alternar facilmente entre Português (PT-BR) e Inglês (EN).

## 📁 Estrutura de Arquivos

```
src/
├── context/
│   └── LanguageContext.jsx    # Context para gerenciar idioma
├── components/
│   ├── LanguageToggle.jsx     # Botão de troca de idioma
│   └── LanguageToggle.css     # Estilos do botão
└── translations.js            # Arquivo com todas as traduções
```

## 🎯 Seções Traduzidas

Todas as seções do portfólio estão completamente traduzidas:

✅ **Navegação** - Menu de navegação (Currículo, Projetos, Contato)  
✅ **Hero** - Seção principal com apresentação  
✅ **Tecnologias** - Título da seção de tecnologias  
✅ **Projetos** - Título, descrição e todos os 6 projetos  
✅ **Contato** - Título, descrição e labels dos contatos  

## 🚀 Como Usar

### 1. Adicionar Novas Traduções

Edite o arquivo `src/translations.js`:

```javascript
export const translations = {
  'pt-BR': {
    nav: {
      resume: 'Currículo',
      projects: 'Projetos',
      // Adicione mais aqui...
    },
    projects: {
      title: 'Projetos Recentes',
      description: 'Descrição dos projetos...',
      project1: {
        name: 'Nome do Projeto',
        alt: 'Texto alternativo',
      },
    },
  },
  'en': {
    nav: {
      resume: 'Resume',
      projects: 'Projects',
      // Adicione mais aqui...
    },
    projects: {
      title: 'Recent Projects',
      description: 'Projects description...',
      project1: {
        name: 'Project Name',
        alt: 'Alternative text',
      },
    },
  },
};
```

### 2. Usar Traduções nos Componentes

```javascript
import { useLanguage } from './context/LanguageContext';

function MeuComponente() {
  const { t } = useLanguage();
  
  return (
    <>
      <h1>{t.nav.resume}</h1>
      <h2>{t.projects.title}</h2>
      <p>{t.projects.description}</p>
      <img src="..." alt={t.projects.project1.alt} />
    </>
  );
}
```

### 3. Obter Idioma Atual

```javascript
const { language } = useLanguage(); // 'pt-BR' ou 'en'
```

### 4. Trocar Idioma Programaticamente

```javascript
const { toggleLanguage } = useLanguage();

<button onClick={toggleLanguage}>Mudar Idioma</button>
```

## 📝 Estrutura das Traduções

```javascript
{
  nav: {
    resume: string,
    projects: string,
    contact: string,
  },
  hero: {
    greeting: string,
    name: string,
    description: string,
    downloadCV: string,
    papers: string,
  },
  technologies: {
    title: string,
  },
  projects: {
    title: string,
    description: string,
    project1: { name: string, alt: string },
    project2: { name: string, alt: string },
    project3: { name: string, alt: string },
    project4: { name: string, alt: string },
    project5: { name: string, alt: string },
    project6: { name: string, alt: string },
  },
  contact: {
    title: string,
    description: string,
    email: string,
    linkedin: string,
    github: string,
  },
}
```

## 💾 Persistência

O idioma selecionado é **automaticamente salvo** no `localStorage` e **restaurado** quando o usuário retorna ao site.

## 🎨 Personalização

### Mudar o Estilo do Botão

Edite `src/components/LanguageToggle.css`:

```css
.language-toggle {
  /* Seus estilos personalizados */
}
```

### Adicionar Mais Idiomas

1. Adicione o novo idioma em `translations.js`:
```javascript
export const translations = {
  'pt-BR': { /* ... */ },
  'en': { /* ... */ },
  'es': { /* traduções em espanhol */ },
};
```

2. Modifique a lógica de toggle em `LanguageContext.jsx` para suportar múltiplos idiomas.

## 📝 Exemplo Completo

```jsx
import { useLanguage } from './context/LanguageContext';

function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  
  return (
    <header>
      <h1>{t.hero.greeting}</h1>
      <p>Idioma atual: {language}</p>
      <button onClick={toggleLanguage}>
        {language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
      </button>
    </header>
  );
}
```

## ✅ Benefícios

- ✨ Simples de usar
- 🔄 Troca instantânea de idioma
- 💾 Persistência automática
- 🎯 Type-safe (pode adicionar TypeScript depois)
- 📦 Sem dependências externas

# React

## Aiemmin

- luokkapohjaiset komponentit
- lifecycle metodit

## Nyt

- funktiopohjaiset komponentit
- hookit

## Uutta

- useEffect

## Linkkejä

### Hooks

- https://reactjs.org/docs/hooks-intro.html
- https://reactjs.org/docs/hooks-reference.html

### Muuta

- state of javascript, vuosittainen
- npmtrends.com

### VsCode plugins

- \*:t code completeen: Visual Studio IntelliCode

### Formit

- react-hook-form
- redux-form (not worth it)
- react-final-form

#### Formik

- kvg: formik yup example

#### Immutability

- immer.js
- imuutable js

## Redux

- tila on kaikki reduxissa yhdessä paikassa, voi olla puumainen rakenne
- viewit on react komponentteja
- viewillä on dispatch funktio, joka heittää actionin

graafi: Action -> Reducer -> Store -> View -> taas Action

### Optimointi

- reselect selectoreiden optimointiin tarvittaessa

### Vaihtoehtoja

- redux-saga
- redux
- mobx
- mobx-state-tree
- redux-observable
  -- rxjs pohjainen

### Infoa

- miksi kaikki eri paikassa, ohjeistus miten kannattaa tehdä --> ducks-modular-redux
- kannattaa noudattaa orjallisesti flux-standard-action mallia
  -- type
  -- payload
  -- jos virhe, payload on Error, error: true

## Routing

- react-router
- reach-router

## Näihin kaikkiin tullaan törmäämään

- hookit
- render propsit
- higher order functionit ja higher order componentint

## Tulevaisuus

- code splitting: tulossa Suspense tähän käyttöön
- Suspense myös mm. datan hakemiseen
- code splitting: React.lazy + Suspense webpackin dynaamisten importtien sijaan

## Virheenhallinta

- react error boundaries reactjs dokumentaatio
- react-error-boundary

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

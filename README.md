# Graphics UI 

This is a template application for generic UI for displaying graphics.
It would automatically draw itself depending on the config and data model.

## Configuration

To configure tabs which should be displayed you can use file

 `src/app/config/endpoints.ts`
 
 Each tab has:
 
 `tabName` - the label used for tab
 
 `apiUrl` - the URL of the back-end service corresponding to the tab
 
 `route` - the Angular 2 Route class holding mapping for routing (you can see some examples in Angular 2 reference in chapter routing)
 
 To add another tab you need to add another object to the ENDPOINTS array.
 
## Data API

Currently application expects the following form of data:

```json
{
  "xLabel": "string",
  "yLabel": "string",
  "points": [
    {
      "xValue": 333,
      "yValue": 222
    },
    {
      "xValue": 444,
      "yValue": 200
    }
  ]
}
```
 
 You may change this API by modifying files under  `src/app/model`

## TODOs

- The graphics component is yet to be implemented. It is located under `src/app/graph`.
- The error handling is now using a simple stub method in the StatsService. It might get a better implementation.

# How to use this Angular app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

aldeed:autoform-bs-button-group-input
=========================

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a Bootstrap button group theme for the "select-checkbox" and "select-radio" AutoForm input types.

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add aldeed:autoform-bs-button-group-input
```

## Usage

Specify "select-checkbox" or "select-radio" for the `type` attribute of any input, and then specify "buttonGroup" as the `template` attribute.

```js
{{> afQuickField name="plans" type="select-radio" template="buttonGroup" value=2 label=false}}
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.1.3/dist/gratipay.png)](https://gratipay.com/aldeed/)

sass-bootstrap-purple
=====================

Purple theme for [Twitter Bootstrap](http://getbootstrap.com/).

This project is based on [jlong/sass-bootstrap](https://github.com/jlong/sass-bootstrap).
It adds the following additions and changes:

headlines
---------

Headlines have been changed to match the Purple web guideline.

> The Purple brand font is Helvetica Neue and consists of five weights: 35 Thin,
> 45 Light, 55 Roman, 65 Medium and 75 Bold.
> Arial is a standard system font used by browsers. Whilst the majority of text
> on an Purple site is HTML Arial, the page designs also occasionally use a
> graphical version of Helvetica Neue to reinforce the brand identity.

![Headlines](docs/images/headlines.png)

```html
<div class="row">
  <img class="col-lg-1  col-md-1  col-sm-1" src="images/purple-logo.png"/>
  <h1  class="col-lg-11 col-md-11 col-sm-11">h1 - title</h1>
</div>

<h2>h2 - large headlines</h2>
<h3>h3 - medium headlines</h3>
<h4>h4 - headers</h4>
<h5>h5 - sub headers / small headlines</h5>
```

colour palette
--------------

Colour palette has been changed to match the Purple web guideline.

> Colours can be used for certain functions in places where there are strongly
> established conventions. For example, green can be used on a button to accept
> a call and red can be used on the button to end a call. The functional colours
> are:
>   - **Green** (`#32C832`): positive: add, call or save.
>   - **Red** (`#CD3C14`): negative: remove, delete, critical alert, end call,
>     cancel.
>   - **Blue** (`#527EDB`): neutral / information: new, edit, settings/wizard,
>     notification counter, help, info, sync, upload, download.
>   - **Yellow** (`#FFCC00`): caution / warning: caution alert.

![Buttons](docs/images/buttons.png)

```html
<button type="button" class="btn btn-default">default</button>
<button type="button" class="btn btn-primary">primary</button>
<button type="button" class="btn btn-success">success</button>
<button type="button" class="btn btn-info">info</button>
<button type="button" class="btn btn-warning">warning</button>
<button type="button" class="btn btn-danger">danger</button>
<button type="button" class="btn btn-link">link</button>
```

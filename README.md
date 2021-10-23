# Hybrid solution for dynamic UX in Django without JS.

Why? New websites are dynamic for attractive to user. 
Using vue/angular/react isn't perfect solution for SEO and doesn't work without JS.

This solution allow creating dynamic website with small dependencies and full-server rendering.
You can use dynamic forms as additional, and handle forms also traditionally. Then it will works with js and non-js browsers.

## Installation

1. Install django-smooth and/or add to your requirements file.
2. Add 'django-smooth' to installed_apps in settings.
3. Add to start html template: ```{% load static %}```
4. Add to end body:

```
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>

<script src="{% static 'smooth-core.js' %}"></script>
```

## Usage

Use case: **Cart incrementation.**

To execute your form by smooth, add smooth="true" attribute in form. Like this:

```<form method="post" smooth="true">```

Mark your html element for manipulating by views:

```<p smooth-id="cart-count">0</p>```

In your view function or method of class add:

```
if request.is_ajax():
    response = SmoothResponse(
        actions=[
            SmoothAction(
                action_type=SmoothIncrement(val=1.0),
                elements=['cart-count']
            )
        ]
    ).dict()
    return JsonResponse(response)
```

More example coming soon.


## Available actions
- **SmoothIncrement** and **SmoothDecrement** - val (float) parameter as increment/decrement value.
- **SmoothRemove** - without parameters.
- **SmoothAddClass** and **SmoothRemoveClass** - class_name (str) parameter as css class name.
- **SmoothSet** and **SmoothAdd** - rendered_html (str) as replacement/added content. You have to add render method, or put complex html without django tags. Warning: Doesn't work with new forms after set yet.
- **SmoothCustom** - js_code (str) as execute js code after executing response.


## Todo
- detecting dynamic forms after "set" action.
- executing smooth without forms.
- more extendable actions.
- support for brython.
- unit tests.
- documentation.

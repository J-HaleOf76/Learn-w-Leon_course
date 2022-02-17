
# HTML, CSS, notes, General, dev

## Khan-Academy note

 This adds a magnifying glass to the page.

* Left Side Facing magnifying glass  &#128269;

 - - - -

* RSF  &#128270;
  
- - - -

```Font Awesome
Search Icon example
<i class="fas fa-search" aria-hidden="true"></i>
```

- - - -

## Forms / Web Forms

* This is a simple Name and Email form with a submit button

```HTML

<form>
  <div><label for="name">Name</label>
  <input type="text" id="name"></div>
  <div><label for="email">Email</label>
  <input type="email" id="email"></div>

  <div class="buttons"><input type="submit" value="Submit"></div>
</form>
```

```CSS

input[type="text"],
input[type="email"] {
  border: 2px solid #000;
  margin: 0 0 1em 0;
  padding: 10px;
  width: 100%;
}

input[type="submit"] {
  border: 3px solid #333;
  background-color: #999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: #fff;
}

input[type="submit"]:hover {
  background-color: #333;
}

```


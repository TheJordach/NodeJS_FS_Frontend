<form class="form-signup"
      id="contactForm"
      action="/login"
      method="POST"
>
    <!-- Email input-->
    <div class="row input-group-newsletter">
        <div class="col">
            <input class="form-control"
                   id="email"
                   type="email"
                   name="email"
                   placeholder="Enter email address..."
                   aria-label="Enter email address..."
            />
        </div>
    </div>
    <!-- password input-->
    <div class="space"></div>

    <div class="row input-group-newsletter">
        <div class="col">
            <input class="form-control"
                   id="password"
                   type="password"
                   name="password"
                   placeholder="Enter password..."
                   aria-label="Enter password..."
            />
        </div>
    </div>
    <div class="space"></div>

    <div class="col-auto">
        <button class="btn btn-primary"
                id="submitButton"
                type="submit">Login!
        </button>
    </div>
    <br/>

</form>
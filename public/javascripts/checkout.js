Stripe.setPublishableKey('pk_test_H99RpRjqnkq8KW4dVEbKRxUz');

// Grabs data from my form and assigns it to form
var $form = $('#checkout-form');

// submits my form data for validation
$form.submit(function (event) {
    $('#charge-error').addClass('hidden');
    // Disable prevents user from submitting multiple times while waiting for validation
    $form.find('button').prop('disabled', true);
    // Fetches values from html
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val()
    }, stripeResponseHandler);
    // Return false makes sure form submission doesnt reach my server before validation
    return false;
});

// Callback checks if there was an err in res meaning the data submitted is invalid
function stripeResponseHandler(status, response) {
    if (response.error) { // Problem!

        // Show the errors on the form
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('hidden');
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!

        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();
    }
}
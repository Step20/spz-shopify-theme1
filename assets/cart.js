document.querySelectorAll(".cart-body input").forEach((input) => {
  input.addEventListener("change", () => {
    const inp = input.parentElement.querySelector("input");
    const value = Number(inp.value);
    const key = input.closest(".cart-card").getAttribute("data-key");

    changeItemQuantity(key, value);
  });
});

function changeItemQuantity(key, quantity) {
  console.log({ quantity, key });

  axios
    .post("/cart/change.js", {
      id: key,
      quantity,
    })
    .then((res) => {
      console.log(res.data);
    });
}

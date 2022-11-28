const carousel = document.querySelectorAll(".carousel")

carousel.forEach(carousel => {
    const items = document.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return ` <span class="Navigation "></span>`
    })

    carousel.insertAdjacentHTML("beforeend", `
    <div class=" Navigations">
        ${buttonsHtml.join("")}
    </div>
    `
    )

    const buttons = carousel.querySelectorAll(".Navigation")

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {

            items.forEach(item => item.classList.remove("carousel__item--selected"))
            buttons.forEach(item => item.classList.remove("active"))

            items[i].classList.add("carousel__item--selected")
            buttons[i].classList.add("active")

        })
    })
})


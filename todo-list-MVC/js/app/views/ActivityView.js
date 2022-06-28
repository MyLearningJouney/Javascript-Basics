class ActivityView{
    #element

    constructor(element){
        this.#element = element
    }

    template(model){
        return `
        <li>
            <div>
                ${
                    model.activities.map((n) => {
                        return `
                        <span>${n.activity}</span>
                        <span>${n.date}</span>
                        `
                })}
            </div>
            <div>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
      </li>
     `;
    }

    update(model){
        this.#element.innerHTML = this.template(model);
    }
}

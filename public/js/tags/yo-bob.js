riot.tag('yo-bob',
    `
        <h1>{label}</h1>
        <h2>{subLabel}</h2>
    `,
    function(opts) {
        let firstName = "Bob";
        let lastName = "Morane";

        this.label = '--- Yo! ---';
        this.subLabel = `Yo ${firstName} ${lastName}`;

        this.on('mount', () => {
            this.root.querySelector("h1").style.color = "red";
            this.root.querySelector("h2").style.color = "green";
        });
    }
);

export default {
    mount: (options) => {
        riot.mount('yo-bob', options);
    }
}
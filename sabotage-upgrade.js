Vue.component("sabotage-upgrade", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="'SP'"></resource-upgrade>`
});
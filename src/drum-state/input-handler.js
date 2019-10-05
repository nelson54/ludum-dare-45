export class InputHandler {

    constructor(state) {
        this.state = state;
    }

    drumhit(event) {
        this.state.events.emit('drumhit', event)
    }

}
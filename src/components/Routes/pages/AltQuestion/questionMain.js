import React from "react";

import Question from "./Questions/question";

const InicialValue = {}

const SalvaQuestion = () => {



    return (
        <Question onSetResponse={(quest, res) => {
            InicialValue[quest] = res
        }} info={InicialValue} />
    )
}

export default SalvaQuestion


#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Person {
    private _personality: string;

    constructor() {
        this._personality = "Mystery";
    }

userInput(input : string) {

    if (input.includes("Talk to other about yourself openly")) {
        this._personality = "Talk happly";
        
    } else if (input.includes("Keep your word to yourself")) {
        this._personality = "Talk rude";
    }
}

get personality() {
    return this._personality
}
}

class Main {
    public async main() {
        const ans = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.bgRed ("Tell your behaviour ?"),
            choices: [
                "1: Talk to others about my self",
                "2: Keep quite & don't ask questions"
            ]
        })


        let myPerson = new Person()

        myPerson.userInput(ans.choice);

        console.log(`you are ${myPerson.personality}`)
    }
}

const myObject = new Main();
myObject.main();
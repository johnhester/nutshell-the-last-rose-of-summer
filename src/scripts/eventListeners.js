// Authors => John Hester, David Bruce, Patrick Murphy//
//  This module defines all the event listeners and their actions relating to Nutshell//

import login from "./login.js"

import messageDOM from "./messages/messageDOM.js"
import messaging from "./messages/messages.js"
import articleFunctions from './articles/articles.js'
import eventFunctions from './events/events.js'
import shared from './miscSharedFunctions.js'
import taskSelect from './tasks/taskForm.js'

const listeners = {

    // event listener object

    login () {
        document.querySelector("#logInButton").addEventListener("click", event => {

            const userName = document.querySelector("#userName").value 
            const password = document.querySelector("#password").value
            login.login(userName, password)
            


        })
    },

    register () {
        document.querySelector("#registerButton").addEventListener("click", event => {

            const newUserObj = {}

            newUserObj.email = document.querySelector("#email").value
            newUserObj.userName = document.querySelector("#userName").value
            newUserObj.password = document.querySelector("#password").value
            const password2 = document.querySelector("#password2").value

            if(newUserObj.password !== password2) {
                alert("Your password fields do not match.")
            } else {
                login.signUp(newUserObj)
                
            }
        })
    },


    //event listener for the 'Add an Item' dropdown selector//

    enableAddItemListener () {
    // Get the value of the option chosen by the user
        document.querySelector(".select__box").addEventListener("change", clickEvent => {
           let userSelect = clickEvent.target.value

            if (userSelect === "event") {
                eventFunctions.addNewEventForm()
            }
            else if (userSelect === "friend") {
                //Invoke Add friend functionality here
            }
            else if (userSelect === "message") {
                messaging.createNewMessage()
            }
            else if (userSelect === "news") {
                //Invoke Add news article functionality here
                articleFunctions.addNewArticleForm()
            }
            else if (userSelect === "task") {
                console.log('task click')
                taskSelect.insertTaskForm()
            }
        } )

    },

    // Articles Listerers
    enableArticleDeleteButton() {
        const newsContainer = document.querySelector(".container__main__middle--news")
        
        newsContainer.addEventListener("click", event => {
                if (event.target.id.startsWith("button__article__delete")) {
                    const articleId = event.target.id.split("--")[1]
                    // console.log(`Delete me ${articleId}`)
                    articleFunctions.articleDelete(articleId)
                }
            }
        )
    },

    enableArticleDiscardButton() {
        document.querySelector("#button__discard__article").addEventListener("click", event => {
            shared.clearDataField()

           }
        )
    },
    enableArticleSave() {
        document.querySelector("#button__save__article").addEventListener("click", event => {
            articleFunctions.addArticleEntry();
        })
    },

    // Events Listeners
    enableEventDeleteButton() {
        const eventsContainer = document.querySelector(".container__main__right--events")
        
        eventsContainer.addEventListener("click", event => {
                if (event.target.id.startsWith("button__event__delete")) {
                    const eventId = event.target.id.split("--")[1]
                    // console.log(`Delete me ${eventId}`)
                    eventFunctions.eventDelete(eventId)
                }
            }
        )
    },

    enableEventDiscardButton() {
        document.querySelector("#button__discard__event").addEventListener("click", event => {
            shared.clearDataField()

            }
        )
    },
    enableEventSave() {
        document.querySelector("#button__save__event").addEventListener("click", event => {
            eventFunctions.addEventEntry();
        })
    },

    //messages section event listeners
    enableDiscardButton() {
        document.querySelector("#discardButton").addEventListener("click", event => {
            shared.clearDataField()

           }
        )
    },
    enableEditButton() {
        document.querySelector(".container__messages--saved").addEventListener("click", event => {
            if (event.target.id.split("--")[0] === "buttonMsg") {
                messageDOM.messageEdit()
            }
            else if (event.target.id.split("--")[0] === "buttonAddMsg") {
                //Place 'Add a friend' funtionality from message click here//
                console.log("Won't you be my neighbor?")
            }
            
            }
        )
    },
    enableMessageSave() {
        document.querySelector("#saveButton").addEventListener("click", event => {
            messageDOM.buildMessageObject()
        })
    },
    enableMessageUpdate() {
        document.querySelector("#updateButton").addEventListener("click", event => {
            messageDOM.buildMessageObject()
        })
    },

    // task section event listeners 
    discardNewTask () {
        document.querySelector("#button__discard--task").addEventListener("click", event => {
            shared.clearDataField()
        })

    }
}

export default listeners
import { useState } from "react"
import FiledSet from "./FiledSet"
import { Icon } from "@iconify/react"
import SelectBox from "./SelectBox"
import { post } from "@/libs/useFetch"
import { API } from "@/libs/useFetch"
import Swal from "sweetalert2"
import { showError } from "@/libs/alertHandler"


const AddNewTicket = () => {



  


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        Swal.fire({
            title: "Are you sur for submiting ?",
            showCancelButton: true,
            cancelButtonColor: "red",
            confirmButtonColor: "green",
            icon: "question"
        }).then(result => {
            if (result.isConfirmed) {
                post(API.DASHBOARD.USER_TICKET_SUBMIT.POST,
                    formData)
                    .then(response => {

                        if (response.status === 200) {
                            Swal.fire({
                                title: "Your ticket Successfuly Submited! ",
                                icon: "success"
                            })
                        }
                    }).catch(err => {

                    })
            }
        })

    }




    return (
        <form className="add-new-teicket" onSubmit={handleFormSubmit}>

            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={
                    {
                        title: "موضوع",
                        svg: <Icon icon="fluent:document-header-20-filled" />
                    }
                }

                inputName={"subject"} />


            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={{ title: "شناسه سفارش / یا هر شناسه دیگر", svg: <Icon icon="fluent-mdl2:product" /> }}
                inputName={"orderID"}
            />


            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={
                    {
                        title: "درخواست",
                        svg: <Icon icon="mingcute:git-pull-request-fill" />
                    }
                }
                inputName={"request"} />


            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={{ title: "پیام شما", svg: <Icon icon="ant-design:message-filled" /> }}
                inputName={"message"}
                inputType={"textarea"}
            />

            <button className="submit-button">
                <span>
                    Submit Ticket
                </span>
                <Icon icon="formkit:submit" />
            </button>


        </form>
    )
}

export default AddNewTicket
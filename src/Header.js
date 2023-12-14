import React, { useState } from 'react'
import EditSchedule from './EditSchedule';
import DeleteButton from './DeleteButton';
function Header(props) {




    return (
        <div class="min-w-[350px] max-w-[350px]m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mt-6 flex-col">

            <div class="text-center space-y-2 sm:text-left ">
                <DeleteButton
                    deleteExam={props.deleteExam}
                    id={props.id} />
                <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p class="text-slate-500 font-medium">
                        {props.endtime}
                    </p>
                </div>
                <EditSchedule
                    id={props.id}
                    name={props.name}
                    endtime={props.endtime}
                    updateFutbol={props.updateFutbol}
                />

            </div>
        </div>

    )
}
export default Header;
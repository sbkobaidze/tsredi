"use client"
import React, { useState } from 'react'
import { Spinner } from '@geist-ui/core'
import { toast } from 'react-toastify'
const ContactBox = ({doc}) => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        description:""
      })
      const [loading,isLoading] = useState(false)
    
    
      const handleEmailSend = async () => {
        console.log("WEWEEWE")
        if (!form.name || !form.lastName ||  !form.email) {
          toast('Required fields are missing')
        }
        isLoading(true)
        console.log('ay bro')
        const data = await fetch('https://saba.vps.sunney.dev/email', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })
        const res = await data.json()
        toast('Email has been sent!')
      isLoading(false)
    }
    
      const handleForm = (e) => { 
    
        const id = e.target.id
        const value = e.target.value
        setForm({...form,[id]:value})
    }
    
    
  return (
      <div className='min-h-screen   py-20 dark:bg-black text-white'>
          
    <div className='h-full w-[80%] m-auto flex md:gap-2 gap-5 md:flex-col'>
      <div className='w-1/2 md:w-full flex justify-center items-center  '>
        <h1 className='font-semibold text-5xl max-w-[500px] md:w-full flex items-center'>
       <br />
{doc.data.maindescription.text}

        </h1>
      </div>
      <div className='w-1/2 md:w-full pt-14 flex flex-col gap-5'> 
                  <span className='font-bold text-2xl'>
                      {doc.data.getstarted.text}
</span> 
        <div className='flex w-full gap-5 '>
          <div className='w-1/2 flex flex-col font-semibold'>
                          <label htmlFor='name' className='text-white'  >{ doc.data.name.text}</label>
            <input id='name' onChange={(e) => handleForm(e)} value={form.name} className=' w-full rounded-md bg-secondary h-10 mr-5 text-textcolor p-2' />
            
          </div>
          <div className='w-1/2 flex flex-col  font-semibold'>
        <label htmlFor='lastName' className='text-white' >{ doc.data.lastname.text}</label>
            <input id='lastName' onChange={(e) => handleForm(e)} value={form.lastName} className=' w-full rounded-md bg-secondary h-10 text-textcolor p-2' />
            
          </div>
        </div>
        <div className='flex w-full  '>
          <div className='w-full flex flex-col font-semibold'>
        <label htmlFor='email' className='text-white' >{ doc.data.email.text}</label>
            <input id='email' onChange={(e) => handleForm(e)} value={form.email} className=' w-full rounded-md bg-secondary h-10 text-textcolor p-2' />
            
          </div>
          
        </div>
        <div className='flex w-full  '>
          <div className='w-full flex flex-col font-semibold'>
        <label htmlFor='phone' className='text-white' >{ doc.data.phone.text}</label>
            <input id='phone' onChange={(e) => handleForm(e)} value={form.phone} className='  w-full rounded-md bg-secondary h-10 text-textcolor p-2' />
            
          </div>
          
        </div>
        <div className='flex w-full  '>
          <div className='w-full flex flex-col font-semibold'>
        <label htmlFor='company' className='text-white' >{ doc.data.company.text}</label>
            <input id='company' onChange={(e) => handleForm(e)} value={form.company} className=' w-full rounded-md bg-secondary h-10 text-textcolor p-2' />
            
          </div>
          
        </div>
        <div className='flex w-full  '>
          <div className='w-full flex flex-col font-semibold'>
        <label htmlFor='description' className='text-white' >{ doc.data.description.text}</label>
            <textarea id='description' onChange={(e) => handleForm(e)} value={form.description} className=' w-full rounded-md bg-secondary h-20 text-textcolor p-2' />
             
          </div>
          
        </div>
        <button className='h-10 rounded-md bg-stext' onClick={() => handleEmailSend()} > {loading ? <div className='flex justify-center items-center'><Spinner color='white' /></div>: <>{ doc.data.button.text}</>}</button>
      </div>
     

      
    </div>
  </div>
  )
}

export default ContactBox
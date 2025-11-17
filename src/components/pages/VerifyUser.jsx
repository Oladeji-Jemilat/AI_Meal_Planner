import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const VerifyAccount = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [verifying, setVerifying] = useState(true)
    const [verificationData, setVerificationData] = useState({ success: "", message: "" })

    useEffect(() => {
        verify()
    }, [])

    const verify = async () => {
        try {
            const res = await fetch(`http://localhost:3001/api/auth/verify/${token}`, {
                method: "POST",
            })
            const data = await res.json()
            if(res.status === 200){
            toast.success || "signup successfully!"
             navigate("/login")
    }
            setVerificationData(data)
            console.log(data)
            
        } catch (error) {
            console.log(error)
        } finally {
            setVerifying(false)
        }
    }
    return (
        <div className='loader'>
     
            {
                verifying ? (
           
             <span className='verify'>Loading...</span>
                  
                ) : (
                    <>
                        <span style={{ color: verificationData.success ? "green" : "red" }}>{verificationData.message}</span>
                    </>
                )
            }
        </div>
    )
}

export default VerifyAccount
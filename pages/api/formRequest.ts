export default async function handler(req: any, res: any) {
    const data = {
        "isNewProject" : req.body.isNewProject,
        "contactName" : req.body.contactName,
        "companyName" : req.body.companyName,
        "service" : req.body.service,
        "moreInformation" : req.body.moreInformation,
        "contactEmail" : req.body.contactEmail
    }

    const response = await fetch(`https://submit-form.com/${process.env.FORM_ID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body : JSON.stringify(data)
    })

    const result = await response.json()


    if (result) {
        res.status(200).json({result})
    } else {
        res.status(400).json({result})
    }
}
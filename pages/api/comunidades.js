import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = 'afc6f23107d4c2875906f77628ffb8'
        const client = new SiteClient(TOKEN)

        const registoCriado = await client.items.create({
            itemType: "1022398",
            title: "Comunidade de Teste",
            imageUrl: "https://github.com/Manuel8Dias.png",
            creatorSlug: "ManuelDias",
        })

        console.log(registoCriado)

        response.json({
            dados: 'Algum dado qualquer',
            registoCriado: registoCriado,
        })

        return
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
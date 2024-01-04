import { BingChat } from 'bing-chat'

async function example() {
  const api = new BingChat({
    cookie: "10Q83ALhe2gKK0QPvW0uy0DoeBtF5Q7M7w7FPlfWpXauu7kLDBI3h1jXU4WWCO3CH13ZpVEa1lpb8_qQiIawnzENw980Xw7MUCAQWhu00gM1t30zDLM77e4VVgiTywUfoNwljCbimZGdzR33d322R2uLQ3Ed4S_6EwqNo3arjctrhISIaXWP8kssVIZW6b0XkimVWMvyjf-nBb46LkbuO5HIKKO7rPWrdDt-91GOhiyM"
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res)
}
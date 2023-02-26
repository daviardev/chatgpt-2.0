import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.PUBLIC_NEXT_CLIENTID,
      clientSecret: process.env.PUBLIC_NEXT_SECRETCLIENT
    })
  ]
}

export default NextAuth(authOptions)

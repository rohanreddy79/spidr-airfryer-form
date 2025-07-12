import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'spidrPin') {
            const digits = value.replace(/\D/g, '').slice(0, 16)
      const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1-')
      setFormData(prev => ({ ...prev, [name]: formatted }))
    } else if (name === 'costGuess') {

      const numericValue = value.replace(/[^0-9.]/g, '')
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert('Form submitted! Check the console for details.')
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Air Fryer Interest Form</h1>
          <p className="text-gray-400">Join the revolution in cooking technology</p>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl">
 
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your first name"
            />
          </div>


          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your last name"
            />
          </div>


          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="(555) 123-4567"
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
          </div>


          <div>
            <label htmlFor="costGuess" className="block text-sm font-medium text-white mb-2">
              Guess the Air Fryer's Cost
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
              <input
                type="text"
                id="costGuess"
                name="costGuess"
                value={formData.costGuess}
                onChange={handleInputChange}
                required
                className="w-full pl-8 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                placeholder="199.99"
              />
            </div>
          </div>


          <div>
            <label htmlFor="spidrPin" className="block text-sm font-medium text-white mb-2">
              Very, Very Secret 16-Digit Spidr PIN
            </label>
            <input
              type="text"
              id="spidrPin"
              name="spidrPin"
              value={formData.spidrPin}
              onChange={handleInputChange}
              required
              maxLength="19"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 font-mono tracking-wider"
              placeholder="1234-5678-9012-3456"
            />
            <p className="text-xs text-gray-400 mt-1">Format: ####-####-####-####</p>
          </div>


          <Button 
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Submit Interest Form
          </Button>
        </form>
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Powered by <span className="text-teal-500 font-semibold">Spidr Design</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App


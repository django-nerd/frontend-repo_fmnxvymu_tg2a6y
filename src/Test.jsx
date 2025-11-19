import { useState, useEffect } from 'react'

function Test() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || ''
      setBackendUrl(baseUrl || '—')
      if (!baseUrl) {
        setBackendStatus('ℹ️ Aucun backend configuré pour ce site vitrine (côté front uniquement).')
        setDatabaseStatus({ error: 'Non applicable' })
        return
      }

      const response = await fetch(`${baseUrl}`)
      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`✅ Connecté - ${data.message || 'OK'}`)
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`❌ Échec - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend inaccessible' })
      }
    } catch (error) {
      setBackendStatus(`❌ Erreur - ${error.message}`)
      setDatabaseStatus({ error: 'Backend inaccessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`)
      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Échec de vérification - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Vérification échouée - ${error.message}` })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Test technique (optionnel)
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Backend URL:</h3>
            <p className="text-sm text-gray-600 break-all bg-gray-100 p-2 rounded">
              {backendUrl}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Backend Status:</h3>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {backendStatus}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Database Status:</h3>
            <div className="text-sm bg-gray-100 p-3 rounded">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-600 font-mono">{databaseStatus.error}</p>
                ) : (
                  <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(databaseStatus, null, 2)}</pre>
                )
              ) : (
                <p className="text-gray-500 font-mono">—</p>
              )}
            </div>
          </div>

          <button
            onClick={checkBackendConnection}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Re-tester
          </button>

          <a
            href="/"
            className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
          >
            Retour à l’accueil
          </a>
        </div>
      </div>
    </div>
  )
}

export default Test

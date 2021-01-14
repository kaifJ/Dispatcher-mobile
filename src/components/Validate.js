import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const Validate = () => {
  const [otp, setOtp] = useState('')

  return (
    <View>
      <View style={{ alignItems: 'center', width: '80%' }}>
        <TextInput
          style={{ width: '100%' }}
          mode="outlined"
          label="OTP"
          textContentType="OTP"
          value={otp}
          onChangeText={text => setOtp(text)}
        />
      </View>
    </View>
  )
}

export default Validate

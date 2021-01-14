import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { TextInput, Button, HelperText } from 'react-native-paper'
import axios from 'axios'

const Register = ({ navigation }) => {
  const phoneInput = useRef(PhoneInput)
  let [formData, setFormData] = useState({
    name: '',
    number: ''
  })

  const setFormattedValue = text => {
    setFormData({ ...formData, number: text })
  }

  const onNumberChange = number => {
    setFormData({ ...formData, number })
  }

  const onNameChange = name => {
    setFormData({ ...formData, name })
  }

  const onRegister = () => {
    let { name, number } = formData
    let isValid = phoneInput.current?.isValidNumber(number)
    if (!isValid) return alert('Please Enter a valid Number')
    if (name.length === 0) return alert('Please enter the Name')
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    axios.post('api/user', { name, number })
    navigation.push('Validate')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', width: '80%' }}>
          <TextInput
            style={{ width: '100%' }}
            mode="outlined"
            label="UserName"
            textContentType="username"
            value={formData.name}
            onChangeText={name => onNameChange(name)}
          />
          <HelperText type="error">UserName is required</HelperText>
        </View>
        <View style={{ width: '80%', paddingTop: 10 }}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={formData.number}
            defaultCode="IN"
            layout="first"
            onChangeText={number => onNumberChange(number)}
            onChangeFormattedText={text => setFormattedValue(text)}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
        <Button onPress={onRegister}>Register</Button>
      </View>
    </View>
  )
}

export default Register

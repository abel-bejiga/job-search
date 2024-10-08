import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-Time", "Part-Time", "Contractor"]

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState("Full-Time")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Abel</Text>
        <Text style={styles.userName}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage} />

        </TouchableOpacity>
      </View>

        <View style={styles.tabsContainer}>
          <FlatList 
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                }}
                >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
              keyExtractor={item => item} //same as key={i} in react
              contentContainerStyle={{ columnGap: SIZES.small}}
              horizontal
            />

        </View>
    </View>
  )
}

export default Welcome
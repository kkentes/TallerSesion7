import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, ImageBackground, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c', uri: 'https://openspacesfengshui.com/wp-content/uploads/2013/05/turqoise-lotus.jpg' },
    { name: 'EMERALD', code: '#2ecc71', uri: 'https://www.anticstore.com/DocBD/commerce/antiquaire/bg-arts-856/objet/80385/AnticStore-Large-Ref-80385_06.jpg' },
    { name: 'PETER RIVER', code: '#3498db', uri: 'https://thumbs-prod.si-cdn.com/pDgYSiiLtdt7ES4u9LWZHzzwnsE=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/3a/a2/3aa2e1c0-6e76-4858-b442-9d0d31e940f3/33190523275_6b2ea9429c_k.jpg' },
    { name: 'AMETHYST', code: '#9b59b6', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DGY0c0K2bs5_i7ywAhNwMuiI4bbp0ybAsF_t1Su_HN0jC3gqNIV-MfzIYmUsZtOBi2w&usqp=CAU' },
    { name: 'WET ASPHALT', code: '#34495e', uri: 'https://thumbs.dreamstime.com/b/wet-asphalt-background-road-dark-grey-texture-wallpaper-top-view-wet-asphalt-background-road-dark-grey-texture-150486194.jpg' },
    { name: 'GREEN SEA', code: '#16a085', uri: 'https://s1.favim.com/orig/150920/macaroon-Favim.com-3328551.jpg' },
    { name: 'NEPHRITIS', code: '#27ae60', uri: 'https://image.shutterstock.com/image-illustration/deep-nephritis-flower-abstract-trendy-260nw-2036883770.jpg' },
    { name: 'BELIZE HOLE', code: '#2980b9', uri: 'https://ih1.redbubble.net/image.368407322.1836/sn,x1000-pad,1000x1000,f8f8f8.jpg' },
    { name: 'WISTERIA', code: '#8e44ad', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wisteria_sinensis_1.JPG/220px-Wisteria_sinensis_1.JPG' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50', uri: 'https://i.pinimg.com/originals/ea/7f/a0/ea7fa00ce4bee316981273882f5fb7c8.jpg' },
    { name: 'SUN FLOWER', code: '#f1c40f', uri: 'https://www.how-to-draw-funny-cartoons.com/images/how-to-draw-a-sunflower-008.jpg' },
    { name: 'CARROT', code: '#e67e22', uri: 'https://s3-eu-west-1.amazonaws.com/yi-files/content/2018/05/5afc9166be8f1.jpg' },
    { name: 'ALIZARIN', code: '#e74c3c', uri: 'https://i.scdn.co/image/ab67616d0000b27352f5ba1606490a7b81712aa9' },
    { name: 'CLOUDS', code: '#ecf0f1', uri: 'https://thumbs.dreamstime.com/z/color-stain-watercolor-cumulus-cloud-object-element-sky-clouds-painted-brush-79032273.jpg' },
    { name: 'CONCRETE', code: '#95a5a6', uri: 'https://i.pinimg.com/736x/c5/0e/d9/c50ed91ba876bc28894fa58b0ce8d980.jpg' },
    { name: 'ORANGE', code: '#f39c12', uri: 'data:image/jpeg;base64,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' },
    { name: 'PUMPKIN', code: '#d35400', uri: 'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202125/0806/glass-pumpkin-object-3-f.jpg' },
    { name: 'POMEGRANATE', code: '#c0392b', uri: 'https://c8.alamy.com/comp/ATBME3/fruits-two-red-color-pomegranates-food-fruit-on-white-background-ATBME3.jpg' },
    { name: 'SILVER', code: '#bdc3c7', uri: 'https://i.pinimg.com/originals/b3/6b/6f/b36b6f5e7d0a72b021b8d20fe02d6897.jpg' },
    { name: 'ASBESTOS', code: '#7f8c8d', uri: 'https://www.asbestos.com/wp-content/uploads/cellulose-fiber.jpg' },
  ]);

function createButtonAlert (msg,title){
    Alert.alert(
      title,
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    }

  return (
    <SectionGrid
      itemDimension={90}
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          title: 'Object colors 1',
          data: items.slice(0, 6),
        },
        {
          title: 'Object colors 2',
          data: items.slice(6, 12),
        },
        {
          title: 'Object colors 3',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => createButtonAlert(item.name,section.title)}>

  <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
        
        
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>          
           <Image 
            style={{ width: 75, height: 75 }}
            source={{ uri: item.uri }}
            />
          </View>   
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});
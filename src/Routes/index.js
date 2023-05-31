import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import ICMS from '../pages/ICMS';
import IPI from '../pages/IPI';
import IPVA from '../pages/IPVA';
import Royalties from '../pages/Royalties';
import PdfICMS2022 from '../pages/PdfICMS2022';
import PdfICMS2021 from '../pages/PdfICMS2021';
import PdfICMS2020 from '../pages/PdfICMS2020';
import PdfICMS2019 from '../pages/PdfICMS2019';
import PdfICMS2018 from '../pages/PdfICMS2018';
import PdfICMS2017 from '../pages/PdfICMS2017';
import PdfICMS2016 from '../pages/PdfICMS2016';
import PdfICMS2015 from '../pages/PdfICMS2015';
import PdfICMS2014 from '../pages/PdfICMS2014';
import PdfIPI2022 from '../pages/PdfIPI2022';
import PdfIPI2021 from '../pages/PdfIPI2021';
import PdfIPI2020 from '../pages/PdfIPI2020';
import PdfIPI2019 from '../pages/PdfIPI2019';
import PdfIPI2018 from '../pages/PdfIPI2018';
import PdfIPI2017 from '../pages/PdfIPI2017';
import PdfIPI2016 from '../pages/PdfIPI2016';
import PdfIPI2015 from '../pages/PdfIPI2015';
import PdfIPI2014 from '../pages/PdfIPI2014';
import PdfIPVA2014 from '../pages/PdfIPVA2014';
import PdfIPVA2015 from '../pages/PdfIPVA2015';
import PdfIPVA2016 from '../pages/PdfIPVA2016';
import PdfIPVA2017 from '../pages/PdfIPVA2017';
import PdfIPVA2018 from '../pages/PdfIPVA2018';
import PdfIPVA2019 from '../pages/PdfIPVA2019';
import PdfIPVA2020 from '../pages/PdfIPVA2020';
import PdfIPVA2021 from '../pages/PdfIPVA2021';
import PdfIPVA2022 from '../pages/PdfIPVA2022';
import PdfROYAL2014 from '../pages/PdfROYAL2014';
import PdfROYAL2015 from '../pages/PdfROYAL2015';
import PdfROYAL2016 from '../pages/PdfROYAL2016';
import PdfROYAL2017 from '../pages/PdfROYAL2017';
import PdfROYAL2018 from '../pages/PdfROYAL2018';
import PdfROYAL2019 from '../pages/PdfROYAL2019';
import PdfROYAL2020 from '../pages/PdfROYAL2020';
import PdfROYAL2021 from '../pages/PdfROYAL2021';
import PdfROYAL2022 from '../pages/PdfROYAL2022';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
        name="Home" 
        component={Home}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "ICMS"
        component={ICMS}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "IPI"
        component={IPI}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "IPVA"
        component={IPVA}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "Royalties"
        component={Royalties}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfICMS2022"
        component={PdfICMS2022}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2021"
        component={PdfICMS2021}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2020"
        component={PdfICMS2020}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2019"
        component={PdfICMS2019}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2018"
        component={PdfICMS2018}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2017"
        component={PdfICMS2017}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2016"
        component={PdfICMS2016}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2015"
        component={PdfICMS2015}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfICMS2014"
        component={PdfICMS2014}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2022"
        component={PdfIPI2022}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2021"
        component={PdfIPI2021}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2020"
        component={PdfIPI2020}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2019"
        component={PdfIPI2019}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2018"
        component={PdfIPI2018}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2017"
        component={PdfIPI2017}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2016"
        component={PdfIPI2016}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2015"
        component={PdfIPI2015}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPI2014"
        component={PdfIPI2014}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfIPVA2014"
        component={PdfIPVA2014}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfIPVA2015"
        component={PdfIPVA2015}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfIPVA2016"
        component={PdfIPVA2016}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfIPVA2017"
        component={PdfIPVA2017}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPVA2018"
        component={PdfIPVA2018}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPVA2019"
        component={PdfIPVA2019}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPVA2020"
        component={PdfIPVA2020}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPVA2021"
        component={PdfIPVA2021}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfIPVA2022"
        component={PdfIPVA2022}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name = "PdfROYAL2022"
        component={PdfROYAL2022}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2021"
        component={PdfROYAL2021}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2020"
        component={PdfROYAL2020}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2019"
        component={PdfROYAL2019}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2018"
        component={PdfROYAL2018}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2017"
        component={PdfROYAL2017}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2016"
        component={PdfROYAL2016}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2015"
        component={PdfROYAL2015}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name = "PdfROYAL2014"
        component={PdfROYAL2014}
        options={{headerShown: false}}
        />

    </Stack.Navigator>
)
}

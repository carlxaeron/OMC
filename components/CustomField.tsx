import * as icons from "@sanity/icons";
// ...
import { Card, Stack, Text } from "@sanity/ui";
import React from "react";

export function CustomField(props: { [x: string]: any; renderDefault?: any; description?: any; title?: any }) {
    const {description, title, ...restProps} = props

    // if(props.name === 'icon') {
    //   return (
    //     <Card padding={3}>
    //       <Stack space={3} marginBottom={3}>
    //         <Text size={1} weight="bold">
    //           {title?.toUpperCase()}
    //         </Text>
    //         {description && (
    //           <Text size={1} style={{color: 'green'}}>
    //             {description}
    //           </Text>
    //         )}
    //       </Stack>
    //       {props.renderDefault(restProps)}
    //     </Card>
    //   )
    // } else 
    return props.renderDefault(restProps);
}

export function CustomInput(props: { [x: string]: any; renderDefault?: any }) {
  const {description, title, ...restProps} = props
  // eslint-disable-next-line react/prop-types
  const IconComponent = icons[props.value];

  if(props.elementProps.id === 'icon' && IconComponent) return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text>
        {React.createElement(IconComponent)}
      </Text>
    </Stack>
  )

  else return props.renderDefault(restProps);
}

export function Preview(props) {
  const {description, title, ...restProps} = props

  console.log(props);

  return props.renderDefault(restProps);
}
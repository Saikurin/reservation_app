import {View} from "./Themed";
import * as React from 'react';
import {Card, Paragraph} from "react-native-paper";
import {NativeSyntheticEvent, StyleSheet} from 'react-native';
import {useCallback, useState} from "react";

export type ArticleType = {
    title: string, text: string, image: string
}

export type ArticleProps = {
    article: ArticleType,
    click: () => void
}

export default function Article(props: ArticleProps) {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(true); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    const onTextLayout = useCallback((e: NativeSyntheticEvent<any>) => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, []);

    return (
        <View>
            <Card style={style.Card} onPress={props.click}>
                <Card.Cover source={{uri: props.article.image}}/>
                <Card.Content>
                    <Paragraph onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 4}
                               style={{lineHeight: 21}}>{props.article.text}</Paragraph>
                    {
                        lengthMore ? <Paragraph
                                onPress={toggleNumberOfLines}
                                style={{
                                    lineHeight: 21,
                                    marginTop: 10
                                }}>{textShown ? 'Read less...' : 'Read more...'}</Paragraph>
                            : null
                    }
                </Card.Content>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    Card: {
        marginBottom: 40,
    }
})

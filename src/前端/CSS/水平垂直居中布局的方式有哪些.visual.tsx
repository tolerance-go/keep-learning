import React from 'react';
import styled from 'styled-components';
import { number } from '@storybook/addon-knobs';

const options = {
  range: true,
  min: 0,
  max: 400,
  step: 10,
};

export const Flex = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
  `;

  const ChildOfSignleText = styled.span`
    height: ${textHeight}px;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    height: ${(props) => props.textHeight || textHeight}px;
    display: inline-block;
  `;

  const TextWrapper = styled.div`
    height: ${textHeight}px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
      <br />
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <TextWrapper>
          <ChildOfMultiText textHeight={'100%'}>
            文本文本文本文本文本文本文本文本文本文本文本文本文本
          </ChildOfMultiText>
        </TextWrapper>
      </Parent>
    </>
  );
};

export const LineHeightAndVerticalAlign = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    line-height: ${parentHeight}px;
    text-align: center;
  `;
  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    vertical-align: middle;
    display: inline-block;
  `;

  const ChildOfSignleText = styled.span``;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    display: inline-block;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
    </>
  );
};

export const VerticalAlign = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    text-align: center;
  `;
  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    display: inline-block;
    vertical-align: middle;
  `;
  const Placeholder = styled.span`
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  `;

  const ChildOfSignleText = styled.span`
    height: ${textHeight}px;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    height: ${(props) => props.textHeight || textHeight}px;
    display: inline-block;
  `;

  const TextWrapper = styled.div`
    display: inline-block;
    height: ${textHeight}px;
    width: 100px;
    background: #eee;
    text-align: center;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
        <Placeholder />
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
        <Placeholder />
      </Parent>
      <br />
      <h2>同样方法用于包装元素失效</h2>
      <Parent>
        <TextWrapper>
          <ChildOfMultiText textHeight={'100%'}>
            文本文本文本文本文本文本文本文本文本文本文本文本文本
          </ChildOfMultiText>
          <Placeholder />
        </TextWrapper>
        <Placeholder />
      </Parent>
    </>
  );
};

export const TableCell = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  `;

  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    display: inline-block;
  `;

  const ChildOfSignleText = styled.span`
    height: ${textHeight}px;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    height: ${(props) => props.textHeight || textHeight}px;
    display: inline-block;
  `;

  const TextWrapper = styled.div`
    height: ${textHeight}px;
    width: 100px;
    background: #eee;
    display: table-cell;
    vertical-align: middle;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
      <br />
      <Parent>
        <TextWrapper>
          <ChildOfMultiText textHeight={'100%'}>
            文本文本文本文本文本文本文本文本文本文本文本文本文本
          </ChildOfMultiText>
        </TextWrapper>
      </Parent>
    </>
  );
};

export const AbsoluteMargin = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    position: relative;
  `;

  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    margin-top: -${imgHeight / 2}px;
    margin-left: -${100 / 2}px;
    top: 50%;
    left: 50%;
    position: absolute;
  `;

  const ChildOfSignleText = styled.span`
    width: 100px;
    height: ${textHeight}px;
    margin-top: -${textHeight / 2}px;
    margin-left: -${100 / 2}px;
    top: 50%;
    left: 50%;
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    height: ${(props) => props.textHeight || textHeight}px;
    display: inline-block;
    height: ${textHeight}px;
    margin-top: -${(props) => (props.textHeight || textHeight) / 2}px;
    margin-left: -${100 / 2}px;
    top: 50%;
    left: 50%;
    position: absolute;
    background: yellow;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <h2>单行截断显示，无法直接居中</h2>
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
    </>
  );
};

export const AbsoluteMargin2 = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    position: relative;
  `;

  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `;

  const ChildOfSignleText = styled.span`
    width: 100px;
    height: ${textHeight}px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    height: ${textHeight}px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <h2>单行截断显示，无法直接居中</h2>
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
    </>
  );
};

export const AbsoluteTransform = () => {
  const parentHeight = number('parent height', 200, options);
  const imgHeight = number('img height', 100, options);
  const textHeight = number('text height', 100, options);
  const Parent = styled.div`
    width: 100%;
    height: ${parentHeight}px;
    background: #ccc;
    position: relative;
  `;

  const ChildOfImg = styled.img.attrs(() => ({
    src: require('assets/hzw.jpeg'),
  }))`
    width: 100px;
    height: ${imgHeight}px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  `;

  const ChildOfSignleText = styled.span`
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  `;

  const ChildOfMultiText = styled.span<{ textHeight?: number | string }>`
    width: 100px;
    display: inline-block;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  `;

  return (
    <>
      <Parent>
        <ChildOfImg></ChildOfImg>
      </Parent>
      <br />
      <h2>单行截断显示，无法直接居中</h2>
      <Parent>
        <ChildOfSignleText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfSignleText>
      </Parent>
      <br />
      <Parent>
        <ChildOfMultiText>
          文本文本文本文本文本文本文本文本文本文本文本文本文本
        </ChildOfMultiText>
      </Parent>
    </>
  );
};

export default { title: '前端/CSS/垂直居中布局的方式' };

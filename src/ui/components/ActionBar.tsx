import React from 'react';
import { Box, Text, Newline } from 'ink';
import TextInput from 'ink-text-input';

interface Props {
  awaitingConfirm: boolean;
  renameMode: boolean;
  renameInput: string;
  setRenameInput: (value: string) => void;
}

export default function ActionBar({ awaitingConfirm, renameMode, renameInput, setRenameInput }: Props) {
  if (!awaitingConfirm) return null;
  return (
    <>
      <Newline />
      {renameMode ? (
        <Box>
          <Text>New name: </Text>
          <TextInput value={renameInput} onChange={setRenameInput} />
          <Text>  (Enter to apply, Esc to cancel)</Text>
        </Box>
      ) : (
        <>
          <Text>Use arrows to select; I=Ignore, D=Delete, R=Rename.</Text>
          <Text>Press Y or Enter to execute. Press N to cancel.</Text>
        </>
      )}
    </>
  );
}

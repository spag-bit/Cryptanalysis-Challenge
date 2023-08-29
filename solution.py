import binascii
import base64
from subprocess import Popen, PIPE

def decodeBase64(encoded_string):
    decoded_bytes = base64.b64decode(encoded_string)
    decoded_base_64 = decoded_bytes.decode('utf-8')
    print(f'level 1: {decoded_base_64}')
    decoded_hex = base64ToHex(decoded_base_64)
    print(f'level 2: {decoded_hex}')
    decoded_string = decipheringfunction(decoded_hex)
    return decoded_string

def base64ToHex(hex_string):
    hex_string = hex_string.replace(" ","")
    ascii_string = binascii.unhexlify(hex_string).decode()
    return ascii_string

# This challenge has own encryption and decryption table needed to be determine 
def decipheringfunction(decoded_string):

    array_1 = ['1', '2', '3', '4', '5', '6', '7', '8', 'a1', 'a2'
               , 'a3', "a4", "a5", "a6", "a7", "a8", "b1", "b2", "b3", 
               "b4", "b5", "b6", "b7", "b8", "c1", "c2", 
               "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12"]
    array_2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    clean_string = []
    result = ''
    decoded_string = '3b3a835b2b4c5c3c4c9'
    deciphered_string = []
    i = 0
    while i < len(decoded_string):
        if decoded_string[i].isdigit():
            deciphered_string.append(decoded_string[i])
            i += 1
        else:
            deciphered_string.append(decoded_string[i] + decoded_string[i+1])
            i += 2
    print(f'level 3: {deciphered_string}')
    for i in deciphered_string:
        if i in array_1:
            index = array_1.index(i)
            clean_string.append(array_2[index])
    result = ''.join(clean_string)
    
    return result

fromJs = Popen(['node', 'challenge.js'], stdout=PIPE)
output = fromJs.stdout.read()
clear_string = output.decode('utf-8')

print(f'Final Output: {decodeBase64(clear_string)}')
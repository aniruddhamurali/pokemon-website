
import requests
import json
from bs4 import BeautifulSoup
from pymongo import MongoClient


with open('mongodb_creds', 'r') as file:
    username = file.readline().strip().split("=")[1]
    password = file.readline().strip().split("=")[1]

mongo = MongoClient("mongodb+srv://{}:{}@pokemon.vujdsli.mongodb.net/test".format(username, password))
db = mongo["pokemon"]
pokemon = db["pokemon"]
pokemon_official_list = db["pokemon_official_list"]


'''
with open('data/pokedex.txt') as file:
    data = json.loads(file.read())
    official_pokemon = []

    for key in data:
        # Exclude unofficial pokemon
        if int(data[key]["num"]) <= 0:
            continue

        
        pokedict = {
            "name": data[key]["name"],
            "lowercase_name": key,
            "number": data[key]["num"],
            "types": data[key]["types"],
            "abilities": data[key]["abilities"],
            "height": data[key]["heightm"],
            "weight": data[key]["weightkg"],
            "eggGroups": data[key]["eggGroups"],
            "hp": data[key]["baseStats"]["hp"],
            "atk": data[key]["baseStats"]["atk"],
            "def": data[key]["baseStats"]["def"],
            "spa": data[key]["baseStats"]["spa"],
            "spd": data[key]["baseStats"]["spd"],
            "spe": data[key]["baseStats"]["spe"]
        }
        if "genderRatio" in data[key]:
            pokedict["genderRatio"] = data[key]["genderRatio"]

        x = pokemon.insert_one(pokedict)
        official_pokemon.append(key)
    
    y = pokemon_official_list.insert_one({"official_pokemon": official_pokemon})
'''



# Scrape pokemon learnsets and update pokemon entries in database
with open('data/learnsets.txt') as file:
    official_pokemon = list(pokemon_official_list.find())[0]['official_pokemon']
    data = json.loads(file.read())
    for pmon in data:
        if pmon not in official_pokemon:
            continue

        learnset = {
            "levelup": [],
            "TM/HM": [],
            "eggmoves": [],
            "tutor": []
        }

        # Pokemon might be event-only
        if "learnset" not in data[pmon]:
            continue
        
        for move in data[pmon]["learnset"]:
            # Only pick move learning methods from either gens 9 or 8
            gen = int(data[pmon]["learnset"][move][0][0])

            for method in data[pmon]["learnset"][move]:
                # If gen 9, only add gen 9 learning methods
                if int(method[0]) == 9 and gen == 9:
                    if method[1] == "L":
                        learnset["levelup"].append({"move": move, "level": int(method[2:])})
                    elif method[1] == "M":
                        learnset["TM/HM"].append(move)
                    elif method[1] == "E":
                        learnset["eggmoves"].append(move)
                    elif method[1] == "T":
                        learnset["tutor"].append(move)
                
                # If gen 8, only add gen 8 learning methods
                elif int(method[0]) == 8 and gen == 8:
                    if method[1] == "L":
                        learnset["levelup"].append({"move": move, "level": int(method[2:])})
                    elif method[1] == "M":
                        learnset["TM/HM"].append(move)
                    elif method[1] == "E":
                        learnset["eggmoves"].append(move)
                    elif method[1] == "T":
                        learnset["tutor"].append(move)
                
                # Exclude gens 7 and earlier
                else:
                    break
        
        # Sort levelup moves in order of levels
        learnset["levelup"] = sorted(learnset["levelup"], key=lambda x: x["level"])
        query = {"lowercase_name": pmon}
        newvalues = { "$set": {"learnset": learnset} }
        x = pokemon.update_one(query, newvalues)

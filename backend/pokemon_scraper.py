
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

with open('data/pokedex.txt') as file:
    data = json.loads(file.read())

    for key in data:
        pokedict = {
            "name": data[key]["name"],
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
        x = pokemon.update_one(pokedict)
    
import {User} from "./user";
import {Importer} from "../interfaces/importerInterface";
/**
 * Created by Michael on 11.07.2016.
 */
const schildIdString:string = "Interne ID-Nummer";
const schildKlasseString:string = "Klasse";
const schildGebString:string = "Geburtsdatum";
const schildNachnameString:string = "Nachname";
const schildVornameString:string = "Vorname";

export class SchildImporter implements Importer{
    private lines:string[];
    private header:string[];
    private feldNummern;
    private userList:User[];

    constructor(private schildSource:string) {
        this.parse();
        this.createUserList();
    }

    public createUserList() {
        this.userList =  this.lines.map(l => this.getUser(l)).filter(u => !u.leer());
    }

    public getListText():string {
        let stringArray = this.lines.map( l =>
            this.getUser(l).toString()
        );
        return stringArray.join('\n\n');
    }

    public getList():User[] {
        return this.userList;
    }

    private parse() {

        this.lines = this.schildSource.split("\n").filter(l => l.trim().length>0);
        this.header = SchildImporter.lineToArray(this.lines.shift());
        this.feldNummern={};

        this.feldNummern[schildIdString] = this.header.indexOf(schildIdString);
        this.feldNummern[schildKlasseString] = this.header.indexOf(schildKlasseString);
        this.feldNummern[schildGebString] = this.header.indexOf(schildGebString);
        this.feldNummern[schildNachnameString] = this.header.indexOf(schildNachnameString);
        this.feldNummern[schildVornameString] = this.header.indexOf(schildVornameString);
    }

    private static lineToArray(line:string) {
        return line.split(";").map(h => h.trim().replace(/^"(.*)"$/, '$1'));
    }

    private getUser(line:string):User {
        let userArray = SchildImporter.lineToArray(line);
        return new User(
            userArray[this.feldNummern[schildVornameString]],
            userArray[this.feldNummern[schildNachnameString]],
            Number(userArray[this.feldNummern[schildIdString]]),
            "",
            "",
            "Schueler",
            userArray[this.feldNummern[schildKlasseString]]
        )
    }
}
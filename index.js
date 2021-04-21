class Monster {
    constructor(name, hp) {
        this.adana = name;
        this.life = hp;
    }
    superAttack() {
        return this.adana + 'のウルトラ攻撃！';
    }
    getSuperHp() {
        return this.life + 'です！';
    }
}

class Character extends Monster {
    constructor(name, hp) {
        super(name, hp);
        this.name = name;
        this.hp = hp;
    }
    attack() {
        return this.name + 'の攻撃！';
    }
    getHp() {
        console.log(super.superAttack());
        return this.hp + 'です！';
    }
}


class Hero extends Character {
    constructor(name, hp, exp) {
        super(name, hp);
        this.exp = exp;
    }
    attack() {
        console.log(this.name + 'の攻撃！！！！');
        return super.getHp();
    }
    getName() {
        return this.hp;
    }
}
  
class Enemy extends Character {

    dropItem() {}
    
    getPoint() {}
    
}

const hero = new Hero('主人公', 100, 10);
console.log(hero.superAttack());
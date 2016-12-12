module.exports = class Redis{
    createClient(){
        var redis = require("redis");
        this.client = redis.createClient();
        this.client.on("error", function(err){
            console.log(err);
        });
    }

    set( key, value ){
        if(this.client == null){
            console.log("set error");
        }

        this.client.set(key, value, function(){
            // callback
            console.log("SET "+key+":"+value);
        });
    }

    get( key ){
        if(this.client == null)
            return;

        this.client.get(key, function(err, val){
            // callback
            if(err) return console.log(err);
            // value
            console.log("GET "+key+":"+val);
        });
    }
}

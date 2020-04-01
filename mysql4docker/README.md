## イメージをビルド
```
docker-compose build
```

### コンテナの作成、起動
```
docker-compose up -d
```

### 作成したコンテナの確認
```
docker ps
```

### コンテナに接続
```
docker exec -it [CONTAINER ID] bash
```

### コンテナ内のMySQLに接続
```
mysql -u root -p
```

### MySQLの終了
```
quit
```

### コンテナ内のシェルの終了
```
exit
```

### コンテナの停止と削除
```
docker-compose down
```